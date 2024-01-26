"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React, { useState } from "react"; // Import useState

import img from "../assets/quesitonair.png";
import Image from "next/image";
import Link from "next/link";

interface AppointmentReason {
  title: string;
}

const AppointmentReasons = [
  {
    title: "Suture removal",
  },
  {
    title: "Nosebleed",
  },
  {
    title: "Swallowing Difficulty",
  },
  {
    title: "Ringing Ear",
  },
  {
    title: "Hearin Loss",
  },
  {
    title: "Groin Pain",
  },
  {
    title: "Breastfeeding Problem / Baby Not feeding",
  },
];

export default function Home() {
  const [state, setState] = useState(0);
  const [progress, setProgress] = useState(0);
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const handleAppointmentClick = () => {
    setProgress(progress + 10); // Set progress to 20%
    setState(state + 1); // Move to the next state
  };

  // Function to render different stages based on state
  const renderStage = () => {
    switch (state) {
      case 0:
        return AppointmentReasons.map((appointment, index) => (
          <div
            className="flex items-center mb-2 w-[350px]"
            key={index}
            onClick={handleAppointmentClick}
          >
            <div className="flex-grow bg-white p-4 rounded-lg shadow-sm flex items-center justify-between border hover:bg-gray-50 border-gray-300">
              <div>
                <p className="text-lg font-semibold">{appointment.title}</p>
              </div>
            </div>
          </div>
        ));
      case 1:
        return (
          <>
            <div className="flex-col items-center mb-2 w-[350px]">
              <div className="mt-4">
                <h2 className="font-bold">How often do you have nosebleeds?</h2>
                <div>
                  <RadioGroup defaultValue="comfortable">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="1" id="r1" />
                      <Label htmlFor="r1">1 time per week</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="2" id="r3" />
                      <Label htmlFor="r2">2 time per week</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="3" id="r3" />
                      <Label htmlFor="r3">3 time per week</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="4" id="r4" />
                      <Label htmlFor="r4">4 time per week</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="5" id="r5" />
                      <Label htmlFor="r5">More than 4 times per week</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
              <div className="mt-4">
                <h2 className="font-bold">
                  How long have you been having nosebleeds for?
                </h2>
                <div>
                  <RadioGroup defaultValue="comfortable">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="1" id="r1" />
                      <Label htmlFor="r1">Days</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="2" id="r3" />
                      <Label htmlFor="r2">Months</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="3" id="r3" />
                      <Label htmlFor="r3">Years</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
              <div className="mt-4">
                <h2 className="font-bold">When was your last nosebleed?</h2>
                <div>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                  />
                </div>
                <div>
                  <RadioGroup defaultValue="comfortable">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="default" id="r1" />
                      <Label htmlFor="r1">I don&apos;t remember exactly</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              <div className="mt-4">
                <h2 className="font-bold">
                  How long do your nosebleeds usally last?
                </h2>
                <div>
                  <RadioGroup defaultValue="comfortable">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="1" id="r1" />
                      <Label htmlFor="r1">Less than 10 minutes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="2" id="r3" />
                      <Label htmlFor="r2">10 - 20 minutes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="3" id="r3" />
                      <Label htmlFor="r3">More than 20 minutes</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
              <Button className="mt-16" onClick={handleAppointmentClick}>
                Next Page
              </Button>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="flex-col items-center mb-2 w-[350px]">
              <div className="mt-4">
                <h2 className="font-bold">
                  What do you think may be bringing on your nosebleeds?
                </h2>
                <div>
                  <RadioGroup defaultValue="comfortable">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="1" id="r1" />
                      <Label htmlFor="r1">Chronic sinus infections</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="2" id="r2" />
                      <Label htmlFor="r2">Enviornmental irritants</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="3" id="r3" />
                      <Label htmlFor="r3">
                        Deviated or perforated hole in septum
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="4" id="r4" />
                      <Label htmlFor="r4">Cocaine use</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="5" id="r5" />
                      <Label htmlFor="r5">
                        Foreign objects in nasal passage
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="6" id="r6" />
                      <Label htmlFor="r6">Nasal injury</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="7" id="r7" />
                      <Label htmlFor="r7">Previous nasal intubation</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="8" id="r8" />
                      <Label htmlFor="r8">
                        Use of supplemental oxygen through nose
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="9" id="r9" />
                      <Label htmlFor="r9">Nose picking</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="10" id="r10" />
                      <Label htmlFor="r10">Previous nasal surgery</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="11" id="r11" />
                      <Label htmlFor="r11">Topical medications</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
              <div className="mt-4">
                <h2 className="font-bold">
                  What home treatment measures have you tried to stop the
                  nosebleeds?
                </h2>
                <div>
                  <RadioGroup defaultValue="comfortable">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="1" id="r1" />
                      <Label htmlFor="r1">Sit up straight</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="2" id="r3" />
                      <Label htmlFor="r2">Tip head slightly forward</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="3" id="r3" />
                      <Label htmlFor="r3">
                        Thumb and forefinger to pinch nose for 10 - 20 minutes
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="4" id="r4" />
                      <Label htmlFor="r4">Ice pack to nose</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="5" id="r5" />
                      <Label htmlFor="r5">Other</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
              <div className="mt-4">
                <h2 className="font-bold">
                  Do you take any of the following medications:
                </h2>
                <div>
                  <RadioGroup defaultValue="comfortable">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="1" id="r1" />
                      <Label htmlFor="r1">Aspirin</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="2" id="r3" />
                      <Label htmlFor="r2">Ibuprofen</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="3" id="r3" />
                      <Label htmlFor="r3">Blood thinners</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="4" id="r4" />
                      <Label htmlFor="r4">None</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
              <div className="mt-4">
                <h2 className="font-bold">
                  Does your family have a history of bleeding problems?
                </h2>
                <div>
                  <RadioGroup defaultValue="comfortable">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="1" id="r1" />
                      <Label htmlFor="r1">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="2" id="r3" />
                      <Label htmlFor="r2">No</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="3" id="r3" />
                      <Label htmlFor="r3">Unsure</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
              <Link href="/dashboard/appointment">
              <Button className="mt-16">
                Submit Request
              </Button>
              </Link>
            </div>
          </>
        );
      // Add more cases as needed for additional stages
      default:
        return <div>
          <Image src={img} alt="Nosebleed"/>
        </div>;
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="w-full mb-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center mb-4">
          Book an Appointment
        </h1>
        <div className="w-16 h-1 bg-blue-500"></div>
      </div>

      {/* Render different components based on state */}
      {renderStage()}

      <Progress value={progress} className="w-[500px] h-2.5 mt-4" />
    </main>
  );
}
