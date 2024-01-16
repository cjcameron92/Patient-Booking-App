import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function Dashboard() {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Search />
        <Input
          type="search"
          placeholder="Patient, test name, medication"
        />
      </div>

      <div className="flex justify-around space-x-4 mt-4">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>24.4k</CardTitle>
            <CardDescription>Appointments</CardDescription>
          </CardHeader>
        </Card>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>2.3k</CardTitle>
            <CardDescription>Patients</CardDescription>
          </CardHeader>
        </Card>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>57</CardTitle>
            <CardDescription>Unviewed Orders</CardDescription>
          </CardHeader>
        </Card>

      </div>
    </div>
  );
}
