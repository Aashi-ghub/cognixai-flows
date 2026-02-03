import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

/**
 * Renders markdown-like content into React components
 * Handles headings, paragraphs, special "Answer Block" sections, and FAQs
 */
export const renderContent = (content: string): React.ReactNode[] => {
  if (!content || !content.trim()) {
    return [<p key="empty" className="text-muted-foreground">No content available.</p>];
  }

  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let currentParagraph: string[] = [];
  let answerBlock: string | null = null;
  let inFAQSection = false;
  let currentFAQ: FAQ | null = null;
  let faqs: FAQ[] = [];

  const flushParagraph = () => {
    if (currentParagraph.length > 0) {
      // Join and clean up extra whitespace
      const text = currentParagraph
        .join(' ')
        .trim()
        .replace(/\s+/g, ' '); // Replace multiple spaces with single space
      if (text) {
        elements.push(
          <p
            key={`p-${elements.length}`}
            className="text-base md:text-lg leading-relaxed text-muted-foreground mb-4"
          >
            {text}
          </p>
        );
      }
      currentParagraph = [];
    }
  };

  const flushAnswerBlock = () => {
    if (answerBlock !== null && answerBlock.trim()) {
      // Clean up answer block text
      const cleanText = answerBlock.trim().replace(/\s+/g, ' ');
      elements.push(
        <div
          key={`answer-${elements.length}`}
          className="mb-8 p-6 bg-primary/5 border-l-4 border-primary rounded-r-lg"
        >
          <p className="text-lg md:text-xl font-semibold leading-relaxed text-foreground">
            {cleanText}
          </p>
        </div>
      );
      answerBlock = null;
    }
  };

  lines.forEach((line, index) => {
    const trimmed = line.trim();

    // Handle Answer Block
    if (trimmed.startsWith('## Answer Block')) {
      flushParagraph();
      flushAnswerBlock();
      // Get the next non-empty line as the answer block content
      let nextIndex = index + 1;
      while (nextIndex < lines.length && !lines[nextIndex]?.trim()) {
        nextIndex++;
      }
      if (nextIndex < lines.length) {
        answerBlock = lines[nextIndex].trim();
      }
      return;
    }

    // Collect answer block content until next heading
    if (answerBlock !== null && trimmed && !trimmed.startsWith('##') && !trimmed.startsWith('###') && !trimmed.startsWith('#')) {
      answerBlock += ' ' + trimmed;
      return;
    }

    // Flush answer block when we hit a heading
    if (answerBlock !== null && (trimmed.startsWith('##') || trimmed.startsWith('###') || trimmed.startsWith('#'))) {
      flushAnswerBlock();
    }

    // Handle headings
    if (trimmed.startsWith('## ') && !trimmed.startsWith('## Answer Block')) {
      flushParagraph();
      flushAnswerBlock();
      
      // If we were in FAQ section and hit a new heading, render FAQs before this heading
      if (inFAQSection && faqs.length > 0) {
        elements.push(renderFAQs(faqs, elements.length));
        faqs = [];
        currentFAQ = null;
      }
      
      // Check if this is a FAQ section heading
      const headingText = trimmed.replace('## ', '').toLowerCase();
      if (headingText.includes('frequently asked') || headingText.includes('faq')) {
        inFAQSection = true;
      } else {
        inFAQSection = false;
      }
      
      elements.push(
        <h2
          key={`h2-${elements.length}`}
          className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-foreground"
        >
          {trimmed.replace('## ', '').trim()}
        </h2>
      );
    } else if (trimmed.startsWith('# ')) {
      flushParagraph();
      flushAnswerBlock();
      
      // If we were in FAQ section and hit a new heading, render FAQs
      if (inFAQSection && faqs.length > 0) {
        elements.push(renderFAQs(faqs, elements.length));
        faqs = [];
        currentFAQ = null;
      }
      inFAQSection = false;
      
      elements.push(
        <h1
          key={`h1-${elements.length}`}
          className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-foreground"
        >
          {trimmed.replace('# ', '').trim()}
        </h1>
      );
    } else if (trimmed.startsWith('### ')) {
      flushParagraph();
      flushAnswerBlock();
      
      // If we were in FAQ section and hit a new heading, render FAQs
      if (inFAQSection && faqs.length > 0) {
        elements.push(renderFAQs(faqs, elements.length));
        faqs = [];
        currentFAQ = null;
      }
      
      elements.push(
        <h3
          key={`h3-${elements.length}`}
          className="text-xl md:text-2xl font-semibold mt-8 mb-4 text-foreground"
        >
          {trimmed.replace('### ', '').trim()}
        </h3>
      );
    } else if (trimmed) {
      // Check if this is a FAQ question
      // Format 1: **Question?** (with bold markers)
      // Format 2: Question? (plain text, only in FAQ section, not a heading)
      const isHeading = trimmed.startsWith('#') || trimmed.startsWith('##') || trimmed.startsWith('###');
      const isFAQQuestion = 
        (trimmed.startsWith('**') && trimmed.endsWith('?**')) ||
        (inFAQSection && !isHeading && trimmed.endsWith('?') && trimmed.length > 1);
      
      if (isFAQQuestion) {
        // Save previous FAQ if exists
        if (currentFAQ && currentFAQ.answer.trim()) {
          faqs.push(currentFAQ);
        }
        // Extract question (remove ** markers if present) and trim
        let question = trimmed.trim();
        if (question.startsWith('**') && question.endsWith('?**')) {
          question = question.replace(/^\*\*/, '').replace(/\?\*\*$/, '?');
        }
        currentFAQ = { question: question.trim(), answer: '' };
        return;
      }
      
      // If we have a current FAQ, this is part of the answer
      if (currentFAQ) {
        const cleanText = trimmed.trim();
        if (cleanText) {
          if (currentFAQ.answer) {
            // Add paragraph break for multi-paragraph answers
            currentFAQ.answer += '\n\n' + cleanText;
          } else {
            currentFAQ.answer = cleanText;
          }
        }
        return;
      }
      
      // Regular paragraph text (not in FAQ section or not a FAQ)
      if (!inFAQSection) {
        currentParagraph.push(trimmed);
      } else {
        // In FAQ section but no current FAQ - this might be a question without proper format
        // Or it could be regular text that should be ignored
        // For now, we'll ignore it to avoid false positives
      }
    } else {
      // Empty line
      if (currentFAQ) {
        // If FAQ has an answer, empty line might separate paragraphs - keep collecting
        // If FAQ has no answer yet, this is the separator between question and answer
        if (!currentFAQ.answer) {
          // Empty line right after question - answer will come next, keep FAQ open
        }
      } else if (!inFAQSection) {
        flushParagraph();
      }
    }
  });

  // Save any remaining FAQ (trim answer)
  if (currentFAQ) {
    currentFAQ.answer = currentFAQ.answer.trim();
    if (currentFAQ.answer) {
      faqs.push(currentFAQ);
    }
  }

  // Render any remaining FAQs
  if (faqs.length > 0) {
    elements.push(renderFAQs(faqs, elements.length));
  }

  // Flush any remaining content
  flushAnswerBlock();
  flushParagraph();

  // If no elements were created, show a fallback
  if (elements.length === 0) {
    return [<p key="processing" className="text-muted-foreground">Content is being processed...</p>];
  }

  return elements;
};

/**
 * Renders FAQs as an Accordion component
 */
const renderFAQs = (faqs: FAQ[], keyIndex: number): React.ReactNode => {
  return (
    <div key={`faqs-${keyIndex}`} className="my-8">
      <Accordion type="single" collapsible className="w-full space-y-2">
        {faqs.map((faq, index) => {
          // Clean and split answer into paragraphs if it contains double newlines
          const cleanAnswer = faq.answer.trim().replace(/\n{3,}/g, '\n\n'); // Normalize multiple newlines
          const answerParagraphs = cleanAnswer.split(/\n\n+/).filter(p => p.trim());
          
          return (
            <AccordionItem
              key={index}
              value={`faq-${keyIndex}-${index}`}
              className="border border-border rounded-lg px-6 bg-card/30 hover:bg-card/50 transition-colors"
            >
              <AccordionTrigger className="text-left text-base md:text-lg font-medium text-foreground hover:no-underline py-4">
                {faq.question.trim()}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                {answerParagraphs.length > 1 ? (
                  <div className="space-y-3">
                    {answerParagraphs.map((para, pIndex) => (
                      <p key={pIndex}>{para.trim().replace(/\s+/g, ' ')}</p>
                    ))}
                  </div>
                ) : (
                  <p>{cleanAnswer.replace(/\s+/g, ' ')}</p>
                )}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};
