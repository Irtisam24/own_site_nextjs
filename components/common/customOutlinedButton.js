export default function CustomOutlinedButton({
  buttonText,
  onClick,
  buttonType,
  smallButton,
}) {
  return (
    <div className="d-flex justify-content-center">
      <div
        onClick={onClick}
        className={
          buttonType === "darkRed" && !smallButton
            ? "outlinedDarkRedButton"
            : buttonType === "darkRed" && smallButton
              ? "outlinedDarkRedButtonSmall"
              : smallButton
                ? "outlinedYellowGoldenButtonSmall"
                : "outlinedYellowGoldenButton"
        }
      >
        {buttonText}
      </div>
    </div>
  );
}
