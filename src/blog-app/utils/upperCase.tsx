export default function UpperCase(st: string) {
  const newSt = st.slice(0, 1).toUpperCase().concat(st.slice(1));
  return newSt;
}
