import { ButtonHyperLink } from "./Button";
import { FiExternalLink } from "react-icons/fi";

function Project({ repo }) {
  const renderDemoLink = repo?.homepage && (
    <ButtonHyperLink
      buttonStyle="link"
      href={repo.homepage}
      className="flex gap-1"
    >
      <FiExternalLink size="15" />
      <span>demo</span>
    </ButtonHyperLink>
  );

  return (
    <div className="h-[9rem] w-[calc(50%-5px)] overflow-hidden border-b-2 border-gray-200">
      <div className="flex flex-wrap justify-between items-center pr-4 ">
        <p className="truncate">{repo.name}</p>
        <div className="flex text-sm">
          {renderDemoLink}
          <ButtonHyperLink
            buttonStyle="link"
            href={repo.html_url}
            className="flex justify-between gap-1 ml-2"
          >
            <FiExternalLink size="15" />
            <span>github</span>
          </ButtonHyperLink>
        </div>
      </div>
      <span className="text-sm">{new Date(repo.pushed_at).getFullYear()}</span>
      <p
        className="mt-2 text-sm overflow-hidden text-ellipsis"
        // credit for a multiline ellipsis idea below goes to: https://stackoverflow.com/a/41137262
        style={{
          display: "-webkit-box",
          WebkitLineClamp: "3",
          WebkitBoxOrient: "vertical",
        }}
      >
        {repo.description}
      </p>
    </div>
  );
}

export default Project;
