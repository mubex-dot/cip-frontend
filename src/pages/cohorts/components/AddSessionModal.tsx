import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import CustomTextField from "@/components/inputs/CustomTextField";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

interface AddSessionModalProps {
  isOpen: boolean;
  onClose: () => void;
  cohortId: number;
}

const AddSessionModal = ({
  isOpen,
  onClose,
  cohortId,
}: AddSessionModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    const payload = {
      title: data.title,
      cohort_id: cohortId,
      file: data.file[0], // React Hook Form captures file input as a FileList
    };

    console.log("Session Upload Payload:", payload);

    reset();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-106.25">
        <DialogHeader>
          <DialogTitle>Add New Session</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-4">
          <CustomTextField
            label="Session Title"
            placeholder="e.g. Introduction to Figma"
            register={register("title", { required: "Title is required" })}
            errorMessage={errors.title}
          />

          <Field>
            <FieldLabel htmlFor="file">Upload Audio Session</FieldLabel>
            <Input
              id="file"
              type="file"
              accept="audio/*"
              {...register("file", {
                required: "An audio file is required",
                validate: {
                  isAudio: (files) =>
                    files?.[0]?.type.startsWith("audio/") ||
                    "Please upload a valid audio file",
                },
              })}
            />
            {errors.file && (
              <p className="text-red-500 text-sm mt-1 text-left">
                {errors.file.message as string}
              </p>
            )}
          </Field>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Upload Session</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddSessionModal;
