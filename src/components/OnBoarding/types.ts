export enum OnBoardingStep {
  Email = "email",
  Video = "video",
  List = "list",
  Extension = "extension",
  Invite = "invite",
}

export type OnboardingStatus = "todo" | "pending" | "done";
