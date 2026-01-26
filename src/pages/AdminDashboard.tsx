import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { LogOut, RefreshCw, Mail, Phone, Building2, Calendar, User, MessageSquare, Trash2 } from "lucide-react";
import { getAllSubmissions, clearAllSubmissions, ConsultationSubmission, ContactSubmission } from "@/lib/api/admin";
import { toast } from "@/hooks/use-toast";

const AdminDashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isClearing, setIsClearing] = useState(false);
  const [showClearDialog, setShowClearDialog] = useState(false);
  const [consultations, setConsultations] = useState<ConsultationSubmission[]>([]);
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const navigate = useNavigate();

  // Check authentication
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("adminAuth") === "true";
    if (!isAuthenticated) {
      navigate("/admin/login", { replace: true });
    }
  }, [navigate]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const data = await getAllSubmissions();
      setConsultations(data.consultations);
      setContacts(data.contacts);
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to fetch submissions",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    localStorage.removeItem("adminUser");
    navigate("/admin/login");
  };

  const handleClearAll = async () => {
    setIsClearing(true);
    try {
      const result = await clearAllSubmissions();
      
      if (result.success) {
        toast({
          title: "Success",
          description: "All submissions have been cleared successfully",
        });
        
        // Refresh data
        await fetchData();
        setShowClearDialog(false);
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to clear submissions",
          variant: "destructive",
        });
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error?.message || "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setIsClearing(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const totalSubmissions = consultations.length + contacts.length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-sm text-gray-500">Manage form submissions</p>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                onClick={fetchData}
                disabled={isLoading}
                className="flex items-center gap-2"
              >
                <RefreshCw className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
                Refresh
              </Button>
              <Button
                variant="destructive"
                onClick={() => setShowClearDialog(true)}
                disabled={isLoading || totalSubmissions === 0}
                className="flex items-center gap-2"
              >
                <Trash2 className="h-4 w-4" />
                Clear All
              </Button>
              <Button
                variant="outline"
                onClick={handleLogout}
                className="flex items-center gap-2"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Submissions</CardDescription>
              <CardTitle className="text-3xl">{totalSubmissions}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Consultation Requests</CardDescription>
              <CardTitle className="text-3xl">{consultations.length}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Contact Submissions</CardDescription>
              <CardTitle className="text-3xl">{contacts.length}</CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="consultations" className="w-full">
          <TabsList>
            <TabsTrigger value="consultations">
              Consultation Requests ({consultations.length})
            </TabsTrigger>
            <TabsTrigger value="contacts">
              Contact Submissions ({contacts.length})
            </TabsTrigger>
          </TabsList>

          {/* Consultations Tab */}
          <TabsContent value="consultations" className="space-y-4">
            {isLoading ? (
              <Card>
                <CardContent className="py-8 text-center">
                  <RefreshCw className="h-8 w-8 animate-spin mx-auto mb-2 text-gray-400" />
                  <p className="text-gray-500">Loading consultations...</p>
                </CardContent>
              </Card>
            ) : consultations.length === 0 ? (
              <Card>
                <CardContent className="py-8 text-center">
                  <p className="text-gray-500">No consultation requests yet</p>
                </CardContent>
              </Card>
            ) : (
              consultations.map((consultation) => (
                <Card key={consultation.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="bg-[#18e2a5] p-2 rounded-full">
                          <User className="h-4 w-4 text-black" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{consultation.name}</CardTitle>
                          <CardDescription className="flex items-center gap-4 mt-1">
                            {consultation.email && (
                              <span className="flex items-center gap-1">
                                <Mail className="h-3 w-3" />
                                {consultation.email}
                              </span>
                            )}
                            {consultation.phone && (
                              <span className="flex items-center gap-1">
                                <Phone className="h-3 w-3" />
                                {consultation.phone}
                              </span>
                            )}
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {formatDate(consultation.created_at)}
                            </span>
                          </CardDescription>
                        </div>
                      </div>
                      {consultation.wants_call && (
                        <Badge className="bg-[#18e2a5] text-black">Wants Call</Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {consultation.company && (
                      <div className="flex items-center gap-2">
                        <Building2 className="h-4 w-4 text-gray-400" />
                        <span className="text-sm">{consultation.company}</span>
                      </div>
                    )}
                    {consultation.goal && (
                      <div>
                        <p className="text-sm font-medium mb-1">Goal/Request:</p>
                        <p className="text-sm text-gray-600 whitespace-pre-wrap">{consultation.goal}</p>
                      </div>
                    )}
                    {consultation.industry && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="font-medium">Industry:</span> {consultation.industry}
                        </div>
                        <div>
                          <span className="font-medium">Team Size:</span> {consultation.team_size}
                        </div>
                        {consultation.challenge && (
                          <div className="col-span-2">
                            <span className="font-medium">Challenge:</span>
                            <p className="text-gray-600 mt-1">{consultation.challenge}</p>
                          </div>
                        )}
                      </div>
                    )}
                    {consultation.automation_requirements && (
                      <div>
                        <p className="text-sm font-medium mb-1">Automation Requirements:</p>
                        <p className="text-sm text-gray-600 whitespace-pre-wrap">
                          {consultation.automation_requirements}
                        </p>
                      </div>
                    )}
                    {consultation.company_website && (
                      <div>
                        <span className="text-sm font-medium">Website: </span>
                        <a
                          href={consultation.company_website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-[#18e2a5] hover:underline"
                        >
                          {consultation.company_website}
                        </a>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>

          {/* Contacts Tab */}
          <TabsContent value="contacts" className="space-y-4">
            {isLoading ? (
              <Card>
                <CardContent className="py-8 text-center">
                  <RefreshCw className="h-8 w-8 animate-spin mx-auto mb-2 text-gray-400" />
                  <p className="text-gray-500">Loading contacts...</p>
                </CardContent>
              </Card>
            ) : contacts.length === 0 ? (
              <Card>
                <CardContent className="py-8 text-center">
                  <p className="text-gray-500">No contact submissions yet</p>
                </CardContent>
              </Card>
            ) : (
              contacts.map((contact) => (
                <Card key={contact.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="bg-[#18e2a5] p-2 rounded-full">
                          <User className="h-4 w-4 text-black" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{contact.name}</CardTitle>
                          <CardDescription className="flex items-center gap-4 mt-1">
                            <span className="flex items-center gap-1">
                              <Mail className="h-3 w-3" />
                              {contact.email}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {formatDate(contact.created_at)}
                            </span>
                          </CardDescription>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {contact.company && (
                      <div className="flex items-center gap-2">
                        <Building2 className="h-4 w-4 text-gray-400" />
                        <span className="text-sm">{contact.company}</span>
                      </div>
                    )}
                    <div>
                      <p className="text-sm font-medium mb-1 flex items-center gap-2">
                        <MessageSquare className="h-4 w-4" />
                        Message:
                      </p>
                      <p className="text-sm text-gray-600 whitespace-pre-wrap">{contact.message}</p>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>
        </Tabs>
      </div>

      {/* Clear All Confirmation Dialog */}
      <AlertDialog open={showClearDialog} onOpenChange={setShowClearDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete all form submissions
              ({totalSubmissions} total: {consultations.length} consultations and {contacts.length} contacts)
              from the database.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isClearing}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleClearAll}
              disabled={isClearing}
              className="bg-red-600 hover:bg-red-700"
            >
              {isClearing ? (
                <>
                  <RefreshCw className="h-4 w-4 animate-spin mr-2" />
                  Clearing...
                </>
              ) : (
                "Clear All Data"
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AdminDashboard;
