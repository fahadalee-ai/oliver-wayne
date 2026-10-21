function AgentFilter({ query, onQueryChange }) {
  return (
    <form
      className="agent-search"
      onSubmit={(event) => event.preventDefault()}
      role="search"
    >
      <label htmlFor="agent-search">Agent name</label>
      <input
        id="agent-search"
        type="search"
        value={query}
        placeholder="Search by name or role"
        onChange={(event) => onQueryChange(event.target.value)}
      />
    </form>
  );
}

export default AgentFilter;
