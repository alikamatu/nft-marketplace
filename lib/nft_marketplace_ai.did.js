export const idlFactory = ({ IDL }) => {
    const Result = IDL.Variant({
      ok: IDL.Text,
      err: IDL.Text
    });
    
    return IDL.Service({
      generateArt: IDL.Func([IDL.Text], [Result], []),
      getGeneratedImages: IDL.Func([], [IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text))], ['query']),
    });
  };