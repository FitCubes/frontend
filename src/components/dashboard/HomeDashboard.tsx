import { CalorieRing } from "./CalorieRing"
import ProgressScreen from "@/sections/ProgressScreen";
import { MacroBars } from "./MacroBars";
import { EnergyBalanceCard } from "./EnergyBalanceCard";
import { Greeting } from "./Greeting";

export const HomeDashboard: React.FC = () => {
    return (<>
        <Greeting />
        <CalorieRing />
        <MacroBars />
        <EnergyBalanceCard />
        <ProgressScreen />
        </>
    )
}
