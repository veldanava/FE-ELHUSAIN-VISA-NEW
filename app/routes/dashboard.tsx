"use client";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // <-- ganti import
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

interface AdminData {
  adminId: string;
  email: string;
  role: string;
}

export default function DashboardPage() {
  const [adminData, setAdminData] = useState<AdminData | null>(null);
  const navigate = useNavigate(); // <-- pakai useNavigate

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem("adminToken");
    const adminId = localStorage.getItem("adminId");
    const email = localStorage.getItem("adminEmail");
    const role = localStorage.getItem("adminRole");

    if (!token || !adminId || !email || !role) {
      navigate("/login"); // <-- ganti router.push jadi navigate
      return;
    }

    setAdminData({
      adminId,
      email,
      role,
    });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminId");
    localStorage.removeItem("adminEmail");
    localStorage.removeItem("adminRole");
    navigate("/login"); // <-- ganti router.push jadi navigate
  };

  if (!adminData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back, {adminData.email}
          </p>
        </div>
        <Button onClick={handleLogout} variant="outline">
          Logout
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Admin Information</CardTitle>
            <CardDescription>Your account details</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div>
                <span className="font-medium">ID:</span> {adminData.adminId}
              </div>
              <div>
                <span className="font-medium">Email:</span> {adminData.email}
              </div>
              <div>
                <span className="font-medium">Role:</span>
                <span
                  className={`ml-2 px-2 py-1 rounded text-xs font-medium ${
                    adminData.role === "SUPER"
                      ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                      : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                  }`}
                >
                  {adminData.role}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common administrative tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button className="w-full bg-transparent" variant="outline">
                Manage Users
              </Button>
              <Button className="w-full bg-transparent" variant="outline">
                View Reports
              </Button>
              <Button className="w-full bg-transparent" variant="outline">
                System Settings
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System Status</CardTitle>
            <CardDescription>Current system information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Status:</span>
                <span className="text-green-600 font-medium">Online</span>
              </div>
              <div className="flex justify-between">
                <span>Last Login:</span>
                <span>{new Date().toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Session:</span>
                <span className="text-green-600 font-medium">Active</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
