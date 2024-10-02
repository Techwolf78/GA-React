import React from 'react';
import { Card, Typography } from "@material-tailwind/react";

const ENGINEERING_TABLE_HEAD = ["Subject", "Topics"];
const MBA_TABLE_HEAD = ["Subject", "Topics"];

const ENGINEERING_TABLE_ROWS = [
  {
    subject: "Computer Science",
    topics: "Programming Languages, Data Structures, Algorithms, Operating Systems",
  },
  {
    subject: "Information Technology",
    topics: "Network Security, Database Management, Web Technologies, Cloud Computing",
  },
  {
    subject: "Electronics",
    topics: "Circuit Theory, Digital Electronics, Microprocessors, Communication Systems",
  },
  {
    subject: "Mechanical Engineering",
    topics: "Thermodynamics, Fluid Mechanics, Heat Transfer, Machine Design",
  },
  {
    subject: "Civil Engineering",
    topics: "Structural Analysis, Fluid Mechanics, Construction Management, Geotechnical Engineering",
  },
];

const MBA_TABLE_ROWS = [
  {
    subject: "Marketing",
    topics: "Consumer Behavior, Digital Marketing, Brand Management, Sales Strategy",
  },
  {
    subject: "Finance",
    topics: "Financial Analysis, Investment Banking, Risk Management, Corporate Finance",
  },
  {
    subject: "Human Resources",
    topics: "Talent Management, Organizational Behavior, Labor Relations, Training & Development",
  },
  {
    subject: "Operations",
    topics: "Supply Chain Management, Project Management, Quality Control, Logistics",
  },
  {
    subject: "Strategy",
    topics: "Business Strategy, Competitive Analysis, Strategic Planning, Innovation Management",
  },
  {
    subject: "Health Care",
    topics: "Healthcare Management, Patient Care, Nursing, Medical Administration",
  }
];

const IndustryOverview = () => {
  const subjectColumnWidth = '250px'; // Fixed width for the subject column

  return (
    <div className="py-2 bg-[#091327] text-white roboto-regular"> {/* Added py-2 here */}
      <div className="container mx-auto px-8 sm:px-8 md:px-16 lg:px-16 xl:px-16">
        <Typography variant="h1" className="text-center mb-8 mt-4 font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-4xl text-[#FFC80E]">
          INDUSTRY ORIENTED TRAINING OVERVIEW
        </Typography>

        {/* Engineering Table */}
        <div className="mb-12">
          <Typography variant="h2" className="text-center mb-4 font-bold text-xl sm:text-2xl lg:text-3xl text-[#FFC80E]">
            ENGINEERING
          </Typography>
          <Card className="w-full overflow-x-auto shadow-lg rounded-lg bg-white">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {ENGINEERING_TABLE_HEAD.map((head) => (
                    <th key={head} className="border-b border-gray-300 bg-[#BCE3F9] p-4">
                      <Typography variant="h6" className="font-bold leading-none opacity-80 text-[#091327]">
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ENGINEERING_TABLE_ROWS.map(({ subject, topics }, index) => {
                  const isLast = index === ENGINEERING_TABLE_ROWS.length - 1;
                  const classes = isLast ? "p-4" : "p-4 border-b border-gray-300";
                  
                  return (
                    <tr key={subject}>
                      <td className={`w-[${subjectColumnWidth}] ${classes} bg-[#E9F6FD]`}>
                        <Typography variant="h6" className="font-bold text-[#000000]">
                          {subject}
                        </Typography>
                      </td>
                      <td className={`${classes} bg-[#DFF1FD]`}>
                        <Typography variant="paragraph" className="font-normal text-[#091327]">
                          {topics}
                        </Typography>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Card>
        </div>

        {/* MBA Table */}
        <div>
          <Typography variant="h2" className="text-center mb-4 font-bold text-xl sm:text-2xl lg:text-3xl text-[#FFC80E]">
            MBA/PGDM
          </Typography>
          <Card className="w-full overflow-x-auto shadow-lg rounded-lg bg-white">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {MBA_TABLE_HEAD.map((head) => (
                    <th key={head} className="border-b border-gray-300 bg-[#BCE3F9] p-4">
                      <Typography variant="h6" className="font-bold leading-none opacity-80 text-[#091327]">
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {MBA_TABLE_ROWS.map(({ subject, topics }, index) => {
                  const isLast = index === MBA_TABLE_ROWS.length - 1;
                  const classes = isLast ? "p-4" : "p-4 border-b border-gray-300";
                  
                  return (
                    <tr key={subject}>
                      <td className={`w-[${subjectColumnWidth}] ${classes} bg-[#E9F6FD]`}>
                        <Typography variant="h6" className="font-bold text-[#091327]">
                          {subject}
                        </Typography>
                      </td>
                      <td className={`${classes} bg-[#DFF1FD]`}>
                        <Typography variant="paragraph" className="font-normal text-[#091327]">
                          {topics}
                        </Typography>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default IndustryOverview;
