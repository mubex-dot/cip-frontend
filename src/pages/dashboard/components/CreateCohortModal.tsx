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
import { useCreateCohortApiV1CohortsPostMutation } from "@/app/app-apis/appApiSlice";

interface CreateCohortModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateCohortModal = ({ isOpen, onClose }: CreateCohortModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [createCohort, { isLoading }] =
    useCreateCohortApiV1CohortsPostMutation();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    try {
      await createCohort({
        cohortCreate: {
          name: data.name,
          description: data.description,
          organization_id: 1,
        },
      }).unwrap();

      // 3. Cleanup on success
      reset();
      onClose();
    } catch (err) {
      console.error("Failed to create cohort:", err);
      alert("Failed to create cohort");
      // Optional: Add a toast notification here
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-106.25">
        <DialogHeader>
          <DialogTitle>Create New Cohort</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-4">
          <CustomTextField
            label="Cohort Name"
            placeholder="e.g. Design Systems 2024"
            register={register("name", { required: "Name is required" })}
            errorMessage={errors.name}
          />
          <CustomTextField
            type="textarea"
            label="Description"
            placeholder="Enter cohort details..."
            register={register("description")}
          />

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Creating..." : "Create Cohort"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateCohortModal;
