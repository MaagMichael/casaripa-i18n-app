export default function GoogleMap() {
  return (
    <div className="w-full h-full p-4 bg-primary">
      <iframe
        className="sm:w-2/3 w-full h-[60vh] mx-auto rounded-lg"
        src="https://maps.google.com/maps?q=Casa%20Ripa,%20Via%20Ripa%209,%2060034%20Cupramontana%20(AN&t=&z=17&ie=UTF8&iwloc=&output=embed"
      ></iframe>
    </div>
  );
}
