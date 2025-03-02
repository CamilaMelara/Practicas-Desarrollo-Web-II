import { categories } from "../data/categorie";

export const ExpenseDetails = ({expense}) =>{
    return (
        <div className="bg-white shadow-lg p-10 w-full border-b border-gray-200 flex gap-5 items-center">
            <div>
                <img 
                    src={`/icono_${categoryInfo.icon}.svg`} 
                    alt="Icono gasto"
                    className="w-20" 
                />
            </div>
    
            {/* Información del gasto */}
            <div className="flex-1">
                <p className="text-sm font-bold uppercase text-slate-500">
                    {categoryInfo.name}
                </p>
                <p>{expense.expenseName}</p>
                <p className="text-slate-600 text-sm">
                    {expense.date 
                        ? new Date(expense.date).toLocaleDateString("es-ES", {
                            weekday: "long",
                            day: "numeric",
                            month: "long",
                            year: "numeric"
                        }) 
                        : "Fecha no disponible"}
                </p>
            </div>
    
            {/* Monto del gasto */}
            <div className="text-2xl text-blue-600 font-bold">
                <span className="font-black text-black">
                    ${expense.amount}
                </span>
            </div>
        </div>
    );

}