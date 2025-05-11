export default function Step5() {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">Checkout</h1>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Payment Method</label>
            <select className="w-full p-2 border rounded-lg bg-background text-foreground">
              <option>Credit Card</option>
              <option>Mobile Money</option>
              <option>Lemon Squeezy</option>
            </select>
          </div>
          <button type="submit" className="px-4 py-2 bg-primary text-white rounded-md">Pay Now</button>
        </form>
      </div>
    );
  }
  