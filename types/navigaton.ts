export type RootStackParamList = {
    Home: undefined;
    Signin: undefined;
    Signup: undefined;
    Journal: { user_id: string
     };
    CreateJournal: {user_id: string};
    EditJournal: {journalId: string}
    JournalContent: {journalId: string}
    Profile: {user_id: string}
  };
  