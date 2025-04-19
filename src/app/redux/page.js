import ReduxCounter from "@/components/ReduxCounter";
import ReduxProvider from "@/providers/ReduxProvider";

export default function ReduxPage() {
  return (
    <ReduxProvider>
      <ReduxCounter />
    </ReduxProvider>
  );
}
