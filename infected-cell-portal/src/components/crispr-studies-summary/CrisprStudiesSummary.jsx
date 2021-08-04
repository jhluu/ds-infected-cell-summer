import React, { Component } from "react";
import { orderBy, filter } from "lodash/fp";

import { Search, Select, Table } from "hub-ui";
import cs from "./CrisprStudiesSummary.scss";

import * as d3 from "d3";


const COLUMNS = [
  {
    dataKey: "First Author",
    header: "First Author",
    bold: true,
    width: 120,
    flexGrow: 3,
  },
  {
    dataKey: "Virus Acronym",
    header: "Virus Acronym",
    width: 100,
    flexGrow: 3,
  },
  {
    dataKey: "Virus",
    header: "Virus",
    width: 100,
    flexGrow: 3,
  },
  {
    dataKey: "Publication",
    header: "Publication",
    width: 120,
    flexGrow: 3,
  },
  {
    dataKey: "Link to raw data",
    header: "Link to raw data",
    width: 120,
    flexGrow: 3,
  },
  {
    dataKey: "Library Used",
    header: "Library Used",
    width: 120,
    flexGrow: 3,
  },
  {
    dataKey: "Status",
    header: "Status",
    width: 120,
    flexGrow: 3,
  },
];


const Virus = [
  {
    value: null,
    label: "Show all",
  },
  {
    value: "Dengue virus 2 16681 strain",
    label: "Dengue",
  },
  {
    value: "SARS-CoV-2",
    label: "SARS-CoV-2",
  },
  {
    value: "Human coronavirus OC43",
    label: "Human coronavirus",
  },
  {
    value: "Human coronavirus 229E",
    label: "Human coronavirus",
  },
  {
    value: "Human coronavirus NL63",
    label: "Human coronavirus",
  },
  {
    value: "Hepatitis C virus JFH1",
    label: "Hepatitis C",
  },
  {
    value: "Hepatitis A virus",
    label: "Hepatitis A",
  },
  {
    value: "West Nile virus",
    label: "West Nile",
  },
  {
    value: "enterovirus D68",
    label: "enterovirus",
  },
  {
    value: "Rhinovirus C15",
    label: "Rhinovirus",
  },
  {
    value: "Ebola (Mayinga)",
    label: "Ebola",
  },
];

class VirusSummary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedVirus: null,
      searchQuery: "",
      sortParams: null,
      tableData: null,
    };
  }

  setSelectedVirus = (selectedVirus) => {
    this.setState({
      selectedVirus,
    });
  };

  setSearchQuery = (searchQuery) => {
    this.setState({
      searchQuery,
    });
  };

  setSortParams = (sortParams) => {
    this.setState({
      sortParams,
    });
  };

  setTableData = (tableData) => {
    this.setState({
      tableData,
    });
  };

  componentDidMount() {
    d3.csv("/data/CRISPR_screen_datasets.csv").then((csvData) => {
      this.setTableData(csvData);
    });
  }

  // Sort the data based on the sort params.
  sortData = (data) => {
    const { sortParams } = this.state;
    if (!sortParams) return data;

    return orderBy([sortParams.dataKey], [sortParams.order], data);
  };

  matchesQuery = (datum, attribute, searchQuery) =>
    datum[attribute] &&
    datum[attribute]
      .toString()

      .toLowerCase()
      .includes(searchQuery.toLowerCase());

  // Filter the data based on various options.
  filterData = (data) => {
    const { selectedVirus, searchQuery } = this.state;
    let filteredData = data;
    console.log(filteredData);
    if (selectedVirus) {
      filteredData = filter(["Virus", selectedVirus], filteredData);
    }

    if (searchQuery) {
      filteredData = filter(
        (datum) =>
          this.matchesQuery(datum, "sex", searchQuery) ||
          this.matchesQuery(datum, "age", searchQuery),
        filteredData
      );
    }
    return filteredData;
  };

  processData = (data) => {
    return this.sortData(this.filterData(data));
  };

  // const VerboseTableStory = () => {
  render() {
    const { selectedVirus, searchQuery, sortParams, tableData } =
      this.state;
    // Sorting is not implemented in the Table.
    // You must store the sortParams and implement the sorting logic in the parent component.
    // const [sortParams, setSortParams] = React.useState(null);

    // function processData(data) {
    //   // Sort data according to the sortParams.
    //   if (!sortParams) return data;

    //   return orderBy([sortParams.dataKey], [sortParams.order], data);
    // }

    return (
      <div className={cs.table}>
        <div className={cs.controls}>
          {/* <Search className={cs.search} onSearch={this.setSearchQuery} /> */}
          <Select
            // items={statuses.map((status, i) => ({value: i, label: status}))}
            className={cs.select}
            items={Virus}
            value={selectedVirus}
            onChange={this.setSelectedVirus}
            placeholder="Filter by Virus..."
          />
        </div>
        <div className={cs.description}>
          Click on the table headers to sort by column.
        </div>
        {tableData && (
          <Table
            data={this.processData(tableData)}
            columns={COLUMNS}
            className={cs.table}
            onSortParamChange={this.setSortParams}
            sortParams={sortParams}
          />
        )}
      </div>
    );
  }
}

export default VirusSummary;
