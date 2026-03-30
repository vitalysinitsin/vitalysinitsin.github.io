import { ButtonHyperLink } from "./Button";

function formatLastUpdated(isoDate) {
  const d = new Date(isoDate);
  return `${d.toLocaleDateString("en-US", { month: "short" })} ${d.getFullYear()}`;
}

function Project({ repo }) {
  const renderDemoLink = repo?.homepage && (
    <ButtonHyperLink
      buttonStyle="link"
      href={repo.homepage}
      className="flex gap-1"
    >
      <span>demo</span>
    </ButtonHyperLink>
  );

  return (
    <div className="flex flex-col gap-2 h-[9rem] overflow-hidden border-b-2 border-r-2 border-gray-200 p-1">
      <div className="flex justify-between items-center">
        <p className="font-semibold truncate">{repo.name}</p>
        <span className="text-sm whitespace-nowrap">
          Last Updated: {formatLastUpdated(repo.pushed_at)}
        </span>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex text-sm gap-2">
          {renderDemoLink}
          <ButtonHyperLink
            buttonStyle="link"
            href={repo.html_url}
            className="flex justify-between gap-1"
          >
            <span>github</span>
          </ButtonHyperLink>
        </div>
      </div>
      <p
        className="text-sm overflow-hidden text-ellipsis"
        // credit for a multiline ellipsis idea below goes to: https://stackoverflow.com/a/41137262
        style={{
          display: "-webkit-box",
          WebkitLineClamp: "4",
          WebkitBoxOrient: "vertical",
          lineHeight: "1.2",
        }}
      >
        {repo.description}
      </p>
    </div>
  );
}

export default Project;
