"use client";
import { commandIcon } from "@/app/utils/icons";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import React from "react";

function SearchDialog() {
  return (
    <div className="search-btn">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">
            <p>Search Here ...</p>
            <div className="">{commandIcon}</div>
            <span className="text-[9px]">F</span>
          </Button>
        </DialogTrigger>
      </Dialog>
    </div>
  );
}

export default SearchDialog;
