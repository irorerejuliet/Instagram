

const TextEllipse = ({username = " ", maxlength = 8}) => {
  const usernameEllipseStory =
    username.length > maxlength
      ? `${username.slice(0, maxlength)}...`
      : username;

  return (
    <div>
      <p className="text-white text-sm mt-1 w-17.5 truncate">
        {usernameEllipseStory}
      </p>
    </div>
  );
}


export default TextEllipse
