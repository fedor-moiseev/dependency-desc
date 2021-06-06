import React from "react";
import "@primer/css/dist/primer.css";
import axios from "axios";

export default function Home() {
  const [repo, setRepo] = React.useState("");
  const [branch, setBranch] = React.useState("main");
  const [res, setRes] = React.useState([]);
  const [error, setError] = React.useState();
  async function search() {
    setError();
    try {
      const r = await axios.get(`/api/all?name=${repo}&branch=${branch}`);
      if (r && r.data && !r.data.error) {
        setRes(r.data);
      } else {
        setError("Repository/branch not found");
      }
    } catch (error) {
      if (error.res && error.res.error) {
        setError(error.res.error);
      } else {
        setError(error.message);
      }
    }
  }
  return (
    <div className="box m-4">
      <div className="markdown-body">
        <h1>node dependency descriptions</h1>
        <blockquote>
          get a table with modules and their descriptions to quickly find what
          modules are used for what
        </blockquote>
      </div>
      {error && (
        <div className="flash mb-3 mt-3 flash-error">{String(error)}</div>
      )}
      <form className="mb-3">
        <div className="form-group">
          <div className="form-group-header">
            <label for="repo">repo</label>
          </div>
          <div className="form-group-body">
            <input
              className="form-control"
              type="text"
              id="repo"
              value={repo}
              onChange={(e) => setRepo(e.target.value)}
              placeholder="expressjs/expressjs.com"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <div className="form-group-header">
            <label for="branch">branch</label>
          </div>
          <div className="form-group-body">
            <input
              className="form-control"
              type="text"
              id="branch"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              required
            />
          </div>
        </div>

        <button
          className="btn btn-primary"
          type="button"
          onClick={() => search()}
          aria-label="Copy to clipboard"
        >
          Search
        </button>
      </form>
      <div className="markdown-body">
        <h2>results</h2>
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>description</th>
            </tr>
          </thead>
          <tbody>
            {res &&
              res instanceof Array &&
              res.map((r) => (
                <tr>
                  <td>{r.name}</td>
                  <td>{r.description}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="mardown-body mt-3">
        <hr />
        Made with <a href="https://nextjs.org">Next.js</a> and{" "}
        <a href="https://primer.style">Primer</a>. Data from{" "}
        <a href="https://github.com">GitHub</a> and{" "}
        <a href="https://www.npmjs.com">NPM</a>.
      </div>
    </div>
  );
}
