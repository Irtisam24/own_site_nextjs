export default function CustomOutlinedButton({
  buttonText,
  onClick,
  buttonType,
}) {
  return (
    <div className="d-flex justify-content-center">
      <div
        onClick={onClick}
        className={
          buttonType == "darkRed"
            ? "outlinedDarkRedButton"
            : "outlinedYellowGoldenButton"
        }
      >
        {buttonText}
      </div>
    </div>
  );
}
