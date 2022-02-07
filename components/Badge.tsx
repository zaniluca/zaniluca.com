type BadgeProps = {
  value: string;
};

const Badge: React.FC<BadgeProps> = ({ value }) => {
  return (
    <div>
      <span className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-0.5 text-sm font-medium text-neutral-800">
        {value}
      </span>
    </div>
  );
};

export default Badge;
