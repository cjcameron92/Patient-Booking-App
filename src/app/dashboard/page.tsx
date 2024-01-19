import CalendarComponent from "@/components/calendar";
import { Icons } from "@/components/icons";
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
        <Input type="search" placeholder="Patient, test name, medication" />
      </div>

      <div className="flex justify-around space-x-4 mt-4">
        <Card className="w-[350px] hover:bg-gray-50">
          <div className="flex items-center ml-4">
            <Icons.messages />
            <CardHeader>
              <CardTitle>24.4k</CardTitle>
              <CardDescription>Messages</CardDescription>
            </CardHeader>
          </div>
        </Card>
        <Card className="w-[350px] hover:bg-gray-50">
          <div className="flex items-center ml-4">
            <Icons.labs />
            <CardHeader>
              <CardTitle>2.3k</CardTitle>
              <CardDescription>Labs</CardDescription>
            </CardHeader>
          </div>
        </Card>
        <Card className="w-[350px] hover:bg-gray-50">
          <div className="justify-start flex items-center ml-4">
            <Icons.send />
            <CardHeader>
              <CardTitle>57</CardTitle>
              <CardDescription>Consultations</CardDescription>
            </CardHeader>
          </div>
        </Card>
      </div>
      <div className="mt-8 bg-white rounded-lg">
        <h1 className="text-primary">Appointments</h1>
        <div className="flex items-center">
            <div>
                <CalendarComponent/>
            </div>
            <div>
                <p>Create appointment</p>
            </div>
        </div>
      </div>
    </div>
  );
}
