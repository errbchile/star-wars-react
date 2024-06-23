import React from "react";
import Header from "../components/Header";
import darthVader from "../assets/darth-vader-ungry.jpg";
import MasterYoda from "../assets/master-yoda-bg.png";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
      <Header />
      <div className="flex flex-grow justify-center h-20">
        <img src={MasterYoda} alt="bg" className="h-96 dark:hidden object-cover" />
        <img src={darthVader} alt="bg" className="h-96 hidden dark:block object-cover" />
      </div>
    </div>
  );
}
