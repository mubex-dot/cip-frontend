import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { sessions } from "@/types/sessions.types";
import { Trash2 } from "lucide-react";
import { useState } from "react";

type SessionListProps = {
  sessions: sessions | undefined;
  onBack?: () => void;
};

function SessionList({ sessions, onBack }: SessionListProps) {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [sessionToDelete, setSessionToDelete] = useState<number | null>(null);

  const handleDeleteClick = (sessionId: number) => {
    setSessionToDelete(sessionId);
    setDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (sessionToDelete) {
      console.log("Deleting session:", sessionToDelete);
      // TODO: Implement actual delete logic here
    }
    setDeleteModalOpen(false);
    setSessionToDelete(null);
  };

  const handleCancelDelete = () => {
    setDeleteModalOpen(false);
    setSessionToDelete(null);
  };

  return (
    <div className="p-4 bg-white border border-border rounded-md flex flex-col gap-2 h-full">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg">Sessions</h3>
        <Button variant="outline" size="sm" onClick={onBack}>
          Back to Overview
        </Button>
      </div>
      <ScrollArea className="h-full">
        <div className="space-y-2 pr-3">
          {sessions?.map((session) => (
            <div
              key={session.id}
              className="flex items-center justify-between p-3 border border-border rounded-md"
            >
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">
                  {session.title || `Session ${session.id}`}
                </p>
                <p className="text-xs text-muted-foreground">
                  Status: {session.status}
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleDeleteClick(session.id)}
                className="text-red-500 hover:text-red-700 hover:bg-red-50"
              >
                <Trash2 size={16} />
              </Button>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteModalOpen} onOpenChange={setDeleteModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Session</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this session? This action cannot
              be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={handleCancelDelete}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleConfirmDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default SessionList;
