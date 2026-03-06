import CustomSelect from "@/components/inputs/CustomSelect";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";

const EngagementTrends = () => {
  return (
    <div className="p-4 bg-white border border-border rounded-md flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <h6 className="font-semibold">Engagement Trend (Last 30 Days)</h6>
        <CustomSelect
          label={"All cohorts"}
          options={[{ name: "All cohorts", value: "all" }]}
          className="w-30"
        />
      </div>
      <div className="bg-background">
        <Empty>
          <EmptyHeader>
            <EmptyTitle>No data</EmptyTitle>
            <EmptyDescription>No data found</EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <EmptyDescription>
              Line Chart of Engagement percentage over time by cohort
            </EmptyDescription>
          </EmptyContent>
        </Empty>
      </div>
    </div>
  );
};

export default EngagementTrends;
