import React from 'react';
import DataTable from 'react-data-table-component';

const data = [{ id: 1, 
name:"Rishi Bhatia",
project:"Uday Emerals Park",
activity_score:"72",
activity_status:"Warm",
leads_assigned_to:"Nikhil"},



    { id: 2, 
        name:"Nikki Troiani",
        project:"GK Aryavat",
        activity_score:"82",
        activity_status:"Interested",
        leads_assigned_to:"Nikhil"},

        { id: 3, 
            name:"George Fields",
            project:"Reuted Dwarka SUn Crest Phase II",
            activity_score:"76",
            activity_status:"Interested",
            leads_assigned_to:"Rishi"},

            { id: 4, 
                name:"Rebecca Moore",
                project:"Reputed Gyan Ganga Society",
                activity_score:"61",
                activity_status:"Warm",
                leads_assigned_to:"Ashwin"},

                { id: 5, 
                    name:"Jane Doe",
                    project:"Reputed Vrindavan Ellegance",
                    activity_score:"52",
                    activity_status:"Interested",
                    leads_assigned_to:"Rishi"},
];









const columns = [
  {
    name: 'Name',
    selector: 'name',
  },
  {
    name: 'Project',
    selector: 'project',
  },
  {
    name: 'Activity Score',
    selector: 'activity_score',
    sortable: true,
  },
  {
    name: 'Activity Status',
    selector: 'activity_status',
  },
  {
    name: 'Leads Assigned to',
    selector: 'leads_assigned_to',
  },
];

function Leads() {
    return (
        <div className="mt-2">
            <DataTable
        title="Leads"
        columns={columns}
        data={data}
        selectableRows // add for checkbox selection
          ///Clicked
      />
        </div>
        
    )
}

export default Leads
