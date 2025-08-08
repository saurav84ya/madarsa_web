// AdminDashboard.jsx
"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Trash } from "lucide-react";

export default function AdminDashboard() {
  const [students, setStudents] = useState([
    { id: 1, name: "Ahmed", course: "Hifz", phone: "9876543210" },
    { id: 2, name: "Ayaan", course: "Urdu", phone: "9123456789" },
  ]);

  const [newStudent, setNewStudent] = useState({ name: "", course: "", phone: "" });

  const handleAddStudent = () => {
    if (newStudent.name && newStudent.course && newStudent.phone) {
      setStudents([
        ...students,
        { ...newStudent, id: Date.now() },
      ]);
      setNewStudent({ name: "", course: "", phone: "" });
    }
  };

  const handleDelete = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">📊 Admin Dashboard</h1>

      <Tabs defaultValue="students" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="students">👨‍🎓 Students</TabsTrigger>
          <TabsTrigger value="notice">📢 Notices</TabsTrigger>
        </TabsList>

        <TabsContent value="students">
          <Card className="mb-6">
            <CardContent className="space-y-4 p-4">
              <h2 className="text-xl font-semibold">Add New Student</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input
                  placeholder="Student Name"
                  value={newStudent.name}
                  onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                />
                <Input
                  placeholder="Course"
                  value={newStudent.course}
                  onChange={(e) => setNewStudent({ ...newStudent, course: e.target.value })}
                />
                <Input
                  placeholder="Phone"
                  value={newStudent.phone}
                  onChange={(e) => setNewStudent({ ...newStudent, phone: e.target.value })}
                />
                <Button onClick={handleAddStudent} className="col-span-full w-fit"><Plus className="mr-2 h-4 w-4" /> Add Student</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-4">All Students</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Course</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {students.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell>{student.name}</TableCell>
                      <TableCell>{student.course}</TableCell>
                      <TableCell>{student.phone}</TableCell>
                      <TableCell>
                        <Button variant="destructive" size="sm" onClick={() => handleDelete(student.id)}>
                          <Trash className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notice">
          <Card>
            <CardContent className="space-y-4 p-4">
              <h2 className="text-xl font-semibold">Post a Notice</h2>
              <Textarea placeholder="Write your notice here..." />
              <Button className="w-fit">📤 Post Notice</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
