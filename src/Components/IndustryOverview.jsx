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
  // Add more rows as needed
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
  // Add more rows as needed
];

const IndustryOverview = () => {
  return (
    <div className="p-6 bg-gradient-to-b from-white via-purple-50 to-purple-100">
      <Typography variant="h2" color="blue-gray" className="text-center mb-12 font-bold text-4xl">
        Industry Oriented Training Overview
      </Typography>

      {/* Engineering Table */}
      <div className="mb-12">
        <Typography variant="h4" color="blue-gray" className="text-center mb-4 font-semibold text-3xl">
          Engineering
        </Typography>
        <Card className="w-full overflow-x-auto shadow-lg rounded-lg bg-white">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {ENGINEERING_TABLE_HEAD.map((head) => (
                  <th key={head} className="border-b border-blue-gray-200 bg-blue-gray-100 p-4">
                    <Typography
                      variant="large"
                      color="blue-gray"
                      className="font-normal leading-none opacity-80"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ENGINEERING_TABLE_ROWS.map(({ subject, topics }, index) => {
                const isLast = index === ENGINEERING_TABLE_ROWS.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-200";
                
                return (
                  <tr key={subject}>
                    <td className={classes}>
                      <Typography variant="large" color="blue-gray" className="font-normal">
                        {subject}
                      </Typography>
                    </td>
                    <td className={`${classes} bg-blue-gray-50`}>
                      <Typography variant="large" color="blue-gray" className="font-normal">
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
        <Typography variant="h4" color="blue-gray" className="text-center mb-4 font-semibold text-3xl">
          MBA/PGDM
        </Typography>
        <Card className="w-full overflow-x-auto shadow-lg rounded-lg bg-white">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {MBA_TABLE_HEAD.map((head) => (
                  <th key={head} className="border-b border-blue-gray-200 bg-blue-gray-100 p-4">
                    <Typography
                      variant="large"
                      color="blue-gray"
                      className="font-normal leading-none opacity-80"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {MBA_TABLE_ROWS.map(({ subject, topics }, index) => {
                const isLast = index === MBA_TABLE_ROWS.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-200";
                
                return (
                  <tr key={subject}>
                    <td className={classes}>
                      <Typography variant="large" color="blue-gray" className="font-normal">
                        {subject}
                      </Typography>
                    </td>
                    <td className={`${classes} bg-blue-gray-50`}>
                      <Typography variant="large" color="blue-gray" className="font-normal">
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
  );
};

export default IndustryOverview;
