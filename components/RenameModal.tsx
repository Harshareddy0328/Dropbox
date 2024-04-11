"use client";

import { useAppStore } from "@/store/store";
import { useUser } from "@clerk/nextjs";
import { rename, stat } from "fs";
import { useState } from "react";



import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "@/fiebase";
import toast from "react-hot-toast";

function RenameModal(){

    const {user} = useUser();

    const[input, setInput] = useState("");

    const [isRenameModalOpen, setIsRenameModalOpen, fileId, fileName] = 
    useAppStore((state) => [
        state.isRenameModalOpen,
        state.setIsRenameModalOpen,
        state.fileId,
        state.fileName,
    ]);

    const renameFile = async () => {
        if(!user || !fileId) return;

        const toastId = toast.loading("Renaming..");

        await updateDoc(doc(db, "users", user.id, "files", fileId), {
            fileName: input,
        });

        toast.success("Renamed Successfully", {
            id: toastId,
        });

        setInput("");
        setIsRenameModalOpen(false);
    };
    return(
        <Dialog
        open={isRenameModalOpen}
        onOpenChange={(isOpen) => {
            setIsRenameModalOpen(isOpen);
        }}
        >
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="pb-2">Rename the File</DialogTitle>
          <Input 
          id="link"
          defaultValue={fileName}
          onChange={(e) => setInput(e.target.value)}
          onKeyDownCapture={(e) => {
            if(e.key === "Enter"){
                renameFile();
            }
          }}
          />

          <div className="flex justify-end space-x-2 py-3">
          <Button
          size="sm"
          className="px-3"
          variant={"ghost"}
          onClick={() => setIsRenameModalOpen(false)}
          >
            <span className="sr-only">Cancel</span>
            <span>Cancel</span>
          </Button>

          <Button
          className="px-3"
          type="submit"
          size="sm"
          onClick={() => renameFile()}
          >
            <span className="sr-only">Rename</span>
            <span>Rename</span>
          </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
    )
}

export default RenameModal