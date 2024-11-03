import { ExpenseProvider } from "../components/ExpenseContext";
import Adder from "./Adder";
import ExpenseShower from "./ExpenseShower";
import Header from "./Header";
import History from "./History";

function AppLayout() {
  return (
    <ExpenseProvider>
      <div className="max-w-full h-screen flex justify-center">
        <div className=" bg-white h-screen p-20">
          <Header />
          <ExpenseShower />
          <History />
          <Adder />
        </div>
      </div>
    </ExpenseProvider>
  );
}

export default AppLayout;
