import MenuDropdown from "../common_components/MenuDropdown";
import Footer from "../common_components/Footer";
import { useEffect, useState } from "react";
import { _getChallenge } from "../utils/axios_controllers";
import login_info from "../login_info";
import MiddleSection from "./subcomponents/MiddleSection";
export default function () {
    return (
        <div className="flex flex-col">
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">BIntellegent</a>
                </div>
                <div className="flex-none gap-2">
                    <MenuDropdown />
                </div>
            </div>
            <MiddleSection />
            <Footer />
        </div>
    );
}
