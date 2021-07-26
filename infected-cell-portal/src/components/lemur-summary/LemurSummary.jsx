import React, { Component } from "react";
import { orderBy, filter } from "lodash/fp";

import { Search, Select, Table } from "hub-ui";
import cs from "./LemurSummary.module.scss";

import lemur_summary_csv from "./LCA_lemur_characteristics.csv";

const COLUMNS = [
  {
    dataKey: "Individual",
    header: "Individual",
    bold: true,
    width: 120,
    flexGrow: 3,
  },
  {
    dataKey: "Species",
    header: "Species",
    width: 100,
    flexGrow: 3,
  },
  {
    dataKey: "Age (yr)",
    header: "Age (yr)",
    width: 100,
    flexGrow: 3,
  },
  {
    dataKey: "Sex",
    header: "Sex",
    width: 120,
    flexGrow: 3,
  },
  {
    dataKey: "Weight (g)",
    header: "Weight (g)",
    width: 120,
    flexGrow: 3,
  },
];

const Individuals = [
  {
    value: null,
    label: "Show all",
  },
  {
    value: "Lemur 1",
    label: "Lemur 1",
  },
  {
    value: "Lemur 2",
    label: "Lemur 2",
  },
  {
    value: "Lemur 3",
    label: "Lemur 3",
  },
  {
    value: "Lemur 4",
    label: "Lemur 4",
  },
];

class IndividualSummary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndividual: null,
      searchQuery: "",
      sortParams: null,
    };
  }

  setSelectedIndividual = (selectedIndividual) => {
    this.setState({
      selectedIndividual,
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
    const { selectedIndividual, searchQuery } = this.state;
    let filteredData = data;
    console.log(filteredData);
    if (selectedIndividual) {
      filteredData = filter(["Individual", selectedIndividual], filteredData);
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
    const { selectedIndividual, searchQuery, sortParams } = this.state;
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
            items={Individuals}
            value={selectedIndividual}
            onChange={this.setSelectedIndividual}
            placeholder="Filter by Individual..."
          />
        </div>
        <div className={cs.description}>
          Click on the table headers to sort by column.
        </div>
        <Table
          data={this.processData(lemur_summary_csv)}
          columns={COLUMNS}
          className={cs.table}
          onSortParamChange={this.setSortParams}
          sortParams={sortParams}
        />
      </div>
    );
  }
}

export default IndividualSummary;
