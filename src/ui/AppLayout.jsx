import { ExpenseProvider } from "../components/ExpenseContext";
import Adder from "./Adder";
import ExpenseShower from "./ExpenseShower";
import Header from "./Header";
import History from "./History";

function AppLayout() {
  return (
    <ExpenseProvider>
      <div className="max-w-full h-screen flex flex-col justify-around items-center">
        <div className=" bg-white p-20">
          <Header />
          <ExpenseShower />
          <History />
          <Adder />
        </div>
        <div className="text-right font-mono">
          Developed by -{" "}
          <span className="font-semibold bg-red-600 text-white p-2 rounded-md">
            RISHIVEL S
          </span>
        </div>
      </div>
    </ExpenseProvider>
  );
}

export default AppLayout;
