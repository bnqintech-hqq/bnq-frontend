import { useState } from "react";

interface AddFundsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (amount: number, method: string) => void; 
}

export default function AddFundsModal({ isOpen, onClose, onConfirm }: AddFundsModalProps) {
  const [amount, setAmount] = useState<string | number>("");
  const [paymentMethod, setPaymentMethod] = useState("UPI");
  const [error, setError] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const quickAmounts = [500, 1000, 2500, 5000];

  if (!isOpen) return null;

  const handleAmountChange = (val: string) => {
    setAmount(val);
    if (Number(val) < 100 && val !== "") {
      setError("Minimum amount is ₹100");
    } else {
      setError("");
    }
  };

  const handlePay = () => {
    const finalAmount = Number(amount);
    if (finalAmount < 100) {
      setError("Minimum amount is ₹100");
      return;
    }
    
    setIsProcessing(true);
    
    // Thoda delay taaki button pe loading effect dikhe, phir parent function call hoga
    setTimeout(() => {
      onConfirm(finalAmount, paymentMethod);
      setIsProcessing(false);
      setAmount("");
      setError("");
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-[60] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden">
        
        {/* Header Gradient */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-5 text-white">
          <h3 className="text-xl font-black mb-1">Add Funds to Wallet</h3>
          <p className="text-sm text-blue-100 font-medium">Instantly top-up your prepaid balance.</p>
        </div>

        <div className="p-6">
          {/* Quick Amounts */}
          <div className="mb-5">
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Quick Select</label>
            <div className="flex flex-wrap gap-2">
              {quickAmounts.map((amt) => (
                <button
                  key={amt}
                  onClick={() => handleAmountChange(amt.toString())}
                  className={`px-4 py-2 rounded-xl text-sm font-bold transition-all border ${
                    amount == amt 
                      ? "bg-blue-50 border-blue-600 text-blue-700 shadow-sm" 
                      : "bg-white border-slate-200 text-slate-600 hover:border-blue-300 hover:bg-slate-50"
                  }`}
                >
                  ₹{amt}
                </button>
              ))}
            </div>
          </div>

          {/* Custom Amount Input */}
          <div className="mb-6">
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Enter Custom Amount</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-black text-lg">₹</span>
              <input 
                type="number" 
                value={amount} 
                onChange={(e) => handleAmountChange(e.target.value)}
                placeholder="0.00" 
                className={`w-full pl-10 pr-4 py-3 rounded-xl border text-lg font-bold outline-none transition-all ${
                  error ? "border-rose-400 focus:ring-2 focus:ring-rose-100" : "border-slate-200 focus:ring-2 focus:ring-blue-500"
                }`}
              />
            </div>
            {error && <p className="text-xs text-rose-500 font-bold mt-2 animate-in slide-in-from-top-1">{error}</p>}
          </div>

          {/* Payment Method Selector */}
          <div className="mb-8 border-t border-slate-100 pt-5">
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Pay Via</label>
            <div className="grid grid-cols-2 gap-3">
              <button 
                onClick={() => setPaymentMethod("UPI")}
                className={`flex items-center justify-center gap-2 p-3 rounded-xl border font-bold text-sm transition-all ${
                  paymentMethod === "UPI" ? "border-emerald-500 bg-emerald-50 text-emerald-700" : "border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                <span>⚡ UPI</span>
              </button>
              <button 
                onClick={() => setPaymentMethod("CARD")}
                className={`flex items-center justify-center gap-2 p-3 rounded-xl border font-bold text-sm transition-all ${
                  paymentMethod === "CARD" ? "border-blue-500 bg-blue-50 text-blue-700" : "border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                <span>💳 Card / Netbanking</span>
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button 
              onClick={() => {
                setAmount("");
                setError("");
                onClose();
              }} 
              disabled={isProcessing}
              className="px-5 py-3.5 rounded-xl font-bold text-slate-600 border border-slate-200 hover:bg-slate-50 transition w-1/3"
            >
              Cancel
            </button>
            <button 
              onClick={handlePay} 
              disabled={!amount || Number(amount) < 100 || isProcessing}
              className="relative flex-1 px-5 py-3.5 rounded-xl font-bold bg-slate-900 text-white shadow-lg hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition overflow-hidden"
            >
              {isProcessing ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Processing...
                </span>
              ) : (
                `Secure Pay ${amount ? `₹${amount}` : ""}`
              )}
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
}