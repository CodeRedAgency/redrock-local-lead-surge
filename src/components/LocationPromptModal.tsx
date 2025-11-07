import { useEffect } from "react";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface LocationPromptModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LocationPromptModal({ isOpen, onClose }: LocationPromptModalProps) {
  useEffect(() => {
    if (isOpen) {
      // Auto-close after 5 seconds
      const timer = setTimeout(() => {
        onClose();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">
            Location Required
          </DialogTitle>
          <DialogDescription className="text-base pt-2">
            Please select your location first to continue. The location dropdown is highlighted in the navigation menu above.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end pt-4">
          <button
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
          >
            <X className="w-4 h-4 mr-2" />
            Got it
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

