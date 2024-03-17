const ErrorpageScreen = ({ show = null } : any) => {
  if (show) {
    return <div>{show}</div>;
  }
  return <div>No page found!!!</div>;
};

export default ErrorpageScreen;
