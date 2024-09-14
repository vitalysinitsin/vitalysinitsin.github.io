import { ButtonHyperLink } from "./Button";

function Project({ repo }) {
  return (
    <div className="h-[7rem] w-[20rem] overflow-hidden">
      <div className="flex justify-between items-center pr-4">
        <ButtonHyperLink buttonStyle="link" href={repo.html_url}>
          {repo.name}
        </ButtonHyperLink>
        <span className="text-sm">
          {new Date(repo.pushed_at).getFullYear()}
        </span>
      </div>
      <p
        className="mt-2 text-sm overflow-hidden text-ellipsis"
        // credit for a multiline ellipsis idea below goes to: https://stackoverflow.com/a/41137262
        style={{
          display: "-webkit-box",
          WebkitLineClamp: "4",
          WebkitBoxOrient: "vertical",
        }}
      >
        {repo.description}
      </p>
    </div>
  );
}

export default Project;
