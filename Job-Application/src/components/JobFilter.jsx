function JobFilter({ search, setSearch, type, setType,onFilter }) {

    const handleSearch = (e) => {
        const newSearch = e.target.value;
        setSearch(newSearch);
        onFilter(newSearch,type);
    };

    const handleType = (e) => {
        const newType = e.target.value;
        setType(newType);
        onFilter(search,newType);
    };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Jobs here"
        value={search}
        onChange={handleSearch}
      />

      <select value={type} onChange={handleType}>
        <option value="">All Types</option>
        <option value="Full-time">Full Time</option>
        <option value="Part-time">Part Time</option>
        <option value="Internship">Internship</option>
      </select>
    </div>
  );
}

export default JobFilter;
