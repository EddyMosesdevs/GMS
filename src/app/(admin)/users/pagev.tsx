"use client";

import React from "react";
import { columns, Users } from "./column"; // Import Users type
import { DataTable } from "@/shacdn/data-table";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// import { useSelector } from "react-redux";
// import { RootState } from "@/store/store";

interface PageViewProps {
  Users: Users[];
}

const PageView: React.FC<PageViewProps> = ({ Users }) => {
  // const editdata = useSelector((state: RootState) => state.edit.editData)

  return (
    <Card className="bg-Background h-screen w-full">
      {/* <div className='overflow-hidden mx-28 rounded-md shadow-lg '> */}
      <CardHeader>
        <CardTitle className="text-Text">Admin User Management</CardTitle>
        <CardDescription className="texxt-Text">
          Manage user by adding, deleting, and viewing available users.
        </CardDescription>
      </CardHeader>
      <div className="flex w-full flex-end justify-end mr-28 -mx-5">
        <Link href="/addService">
          <Button className="flex-end font-bold text-white px-6 py-3 rounded-md">
            Add New User
          </Button>
        </Link>
      </div>

      <DataTable columns={columns} data={Users} />

      {/* </div> */}
    </Card>
  );
};

export default PageView;