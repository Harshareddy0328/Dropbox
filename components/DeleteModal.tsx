"use client";

import { Copy, Ghost } from "lucide-react";
import { useAppStore } from "@/store/store";


import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useUser } from "@clerk/nextjs";
import { db, storage } from "@/fiebase";
import { deleteObject, ref } from "firebase/storage";
import { deleteDoc, doc } from "firebase/firestore";
import toast from "react-hot-toast";

export function DeleteModal() {
    const { user } = useUser();

    const [issDeleteModalOpen, setIsDeleteModalOpen, fileId, setFileId] = 
        useAppStore((state) => [
            state.isDeleteModalOpen,
            state.setIsDeleteModalOpen,
            state.fileId,
            state.setFileId,
        ]);

    async function deleteFile() {
        if(!user || !fileId) return;

        const toastId = toast.loading("Deleting...");

        const fielRef = ref(storage, `users/${user.id}/files/${fileId}`);

        try {
            deleteObject(fielRef).then(async () => {
                deleteDoc(doc(db, "users", user.id, "files", fileId)).then(() => {
                    
                    toast.success("Deleted Successfully",{
                        id: toastId,
                    });
                });
            }).finally(() => {
                setIsDeleteModalOpen(false);
            });
        } catch (error) {
            console.log(error);
            setIsDeleteModalOpen(false);
        }
    }
  return (
    <Dialog
    open={issDeleteModalOpen}
    onOpenChange={(isOpen) => {
        setIsDeleteModalOpen(isOpen);
    }}
    >
      
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Are you sure you want to delete?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your file!
          </DialogDescription>
        </DialogHeader>
        <div className="flex space-x-2 py-3">
            <Button 
            size="sm"
            className="px-3 flex-1"
            variant={"ghost"}
            onClick={() => setIsDeleteModalOpen(false)}
            >
                <span className="sr-only">Cancel</span>
                <span>Cancel</span>
            </Button>
            <Button 
            size="sm"
            type="submit"
            className="px-3 flex-1"
            onClick={() => deleteFile()}
            >
                <span className="sr-only">Delete</span>
                <span>Delete</span>
            </Button>


        </div>
          
        
      </DialogContent>
    </Dialog>
  )
}
