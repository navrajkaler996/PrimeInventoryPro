export const StockAlerts:React.FC = () => {

    return <div id="dashboard-stockalerts">
        <div className="w-[800px] h-[315px] bg-white mt-[70px] ml-[60px] rounded-custom shadow-custom overflow-auto">
            <h1 className="ml-[20px] pt-[10px] text-[20px]">Stock alert</h1>
            <hr className="m-[15px] text-gray" />
            <div>
                <table className="table-fixed w-[100%] border-seperate border-spacing-y-3">
                    <thead className="sticky top-0 bg-white">
                        <tr>
                            <th>Name</th>
                            <th>Code</th>
                            <th>Department</th>
                            <th>On hands</th>
                            <th>Cap</th>
                            <th>Required</th>
                        </tr>
                    </thead>
                    <tbody className="text-center capitalize">
                        <tr className="mt-[40px]">
                            <td className="pt-3">Chicken wings</td>
                            <td className="pt-3">010103</td>
                            <td className="pt-3">Meats</td>
                            <td className="pt-3">30</td>
                            <td className="pt-3">40</td>
                            <td className="pt-3">10</td>
                        </tr>
                        <tr className="mt-[40px]">
                            <td className="pt-3">Pork ribs</td>
                            <td className="pt-3">010103</td>
                            <td className="pt-3">Meats</td>
                            <td className="pt-3">30</td>
                            <td className="pt-3">40</td>
                            <td className="pt-3">10</td>
                        </tr>
                        <tr className="mt-[40px]">
                            <td className="pt-3">Chicken drumsticks</td>
                            <td className="pt-3">010103</td>
                            <td className="pt-3">Meats</td>
                            <td className="pt-3">30</td>
                            <td className="pt-3">40</td>
                            <td className="pt-3">10</td>
                        </tr>
                        <tr className="mt-[40px]">
                            <td className="pt-3">Beef strips</td>
                            <td className="pt-3">010103</td>
                            <td className="pt-3">Meats</td>
                            <td className="pt-3">30</td>
                            <td className="pt-3">40</td>
                            <td className="pt-3">10</td>
                        </tr>
                        <tr className="mt-[40px]">
                            <td className="pt-3">Salmon</td>
                            <td className="pt-3">010103</td>
                            <td className="pt-3">Meats</td>
                            <td className="pt-3">30</td>
                            <td className="pt-3">40</td>
                            <td className="pt-3">10</td>
                        </tr>
                        <tr className="mt-[40px]">
                            <td className="pt-3">Mild italian sausages</td>
                            <td className="pt-3">010103</td>
                            <td className="pt-3">Meats</td>
                            <td className="pt-3">30</td>
                            <td className="pt-3">40</td>
                            <td className="pt-3">10</td>
                        </tr>
                        <tr className="mt-[40px]">
                            <td className="pt-3">Chicken boneless breast</td>
                            <td className="pt-3">010103</td>
                            <td className="pt-3">Meats</td>
                            <td className="pt-3">30</td>
                            <td className="pt-3">40</td>
                            <td className="pt-3">10</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>

        </div>
    </div>

}

export default StockAlerts;