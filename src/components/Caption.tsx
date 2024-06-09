function Caption() {
  const status = [
    { color: "bg-color_status_5", label: "Ausgecheckt" },
    { color: "bg-color_status_4", label: "Eingecheckt" },
    { color: "bg-color_status_1", label: "Anreisetag" },
    { color: "bg-color_status_3", label: "Abreisetag" },
    { color: "bg-color_status_2", label: "Ausstehend" },
  ];

  return (
    <div className="flex flex-wrap gap-3 mt-2 md:ml-[155px] text-sm">
      {status.map((status, index) => (
        <div key={index} className="flex items-center gap-1">
          <div className={`w-4 h-4 ${status.color} rounded-full`}></div>
          <span>{status.label}</span>
        </div>
      ))}
    </div>
  );
}

export default Caption;
