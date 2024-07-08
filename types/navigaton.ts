export type RootStackParamList = {
    Home: undefined;
    Signin: undefined;
    Signup: undefined;
    // Journal: { journal: string };
    CreateJournal: undefined;
    EditJournal: {journalId: string}
    JournalContent: {journalId: string}
  };
  