import { DottedGlowBackground } from "./ui/dotted-glow-background";

interface LandingPageCardProps {
  children: React.ReactNode;
  className?: string;
}

export const LandingPageCard = ({
  children,
  className,
}: LandingPageCardProps) => {
  return (
    <div className={`rounded-md bg-neutral-100 ${className || ""}`}>
      {children}
    </div>
  );
};

interface CardTitleProps {
  className?: string;
  children: React.ReactNode;
}
export const CardContent = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <div className={`px-4 pb-6 ${className || ""}`}>{children}</div>;
};

export const CardTitle = ({ className, children }: CardTitleProps) => {
  return (
    <h3 className={`mb-4 text-lg font-bold ${className || ""}`}>{children}</h3>
  );
};

export const CardSkeleton = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={`relative min-h-80 overflow-hidden rounded-t-md ${className || ""}`}
    >
      {children}
      <div className="h-full w-full">
        <DottedGlowBackground
        className="pointer-events-none"
        opacity={0.8}
        gap={10}
        radius={1.6}
        colorLightVar="--color-neutral-500"
        glowColorLightVar="--color-neutral-600"
        colorDarkVar="--color-neutral-500"
        glowColorDarkVar="--color-sky-800"
        backgroundOpacity={0}
        speedMin={0.3}
        speedMax={1.6}
        speedScale={1}
      />
      </div>
    </div>
  );
};
