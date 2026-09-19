import { useRef, useState } from "react";
import { Upload, ArrowUpRight } from "lucide-react";

const API_URL = "http://localhost:5000/api/submissions";

const MAX_FILE_SIZE = 500 * 1024 * 1024;

const ALLOWED_EXTENSIONS = [
  "wav",
  "mp3",
  "mp4",
  "m4a",
  "mov",
  "pdf",
  "docx",
];

const ALLOWED_MIME_TYPES = [
  "audio/wav",
  "audio/x-wav",
  "audio/mpeg",
  "video/mp4",
  "audio/m4a",
  "video/quicktime",
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const ALLOWED_CATEGORIES = [
  "Music",
  "Film",
  "Documentary",
  "Script",
  "Visual Art",
];

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  city: "",
  category: "Music",
  title: "",
  about: "",
  portfolio: "",
  file: null,
};

export default function WorkSubmission() {
  const fileInputRef = useRef(null);

  const [form, setForm] = useState(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setMessage("");
    setError("");
  };

  const validateForm = () => {
    const newErrors = {};

    const name = form.name.trim();
    const email = form.email.trim();
    const phone = form.phone.trim();
    const city = form.city.trim();
    const title = form.title.trim();
    const about = form.about.trim();
    const portfolio = form.portfolio.trim();

    // Name
    if (!name) {
      newErrors.name = "Please enter your full name.";
    } else if (name.length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    } else if (name.length > 100) {
      newErrors.name = "Name must be less than 100 characters.";
    }

    // Email
    if (!email) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    } else if (email.length > 255) {
      newErrors.email = "Email address is too long.";
    }

    // Phone
    if (!phone) {
      newErrors.phone = "Please enter your phone number.";
    } else {
      const digitsOnly = phone.replace(/\D/g, "");

      if (digitsOnly.length < 7 || digitsOnly.length > 15) {
        newErrors.phone = "Please enter a valid phone number.";
      } else if (!/^[+()\d\s-]+$/.test(phone)) {
        newErrors.phone = "Phone number contains invalid characters.";
      }
    }

    // City
    if (city.length > 100) {
      newErrors.city = "City / State must be less than 100 characters.";
    }

    // Category
    if (!ALLOWED_CATEGORIES.includes(form.category)) {
      newErrors.category = "Please select a valid category.";
    }

    // Title
    if (title && title.length < 2) {
      newErrors.title = "Project title must be at least 2 characters.";
    } else if (title.length > 200) {
      newErrors.title = "Project title must be less than 200 characters.";
    }

    // About
    if (about && about.length < 20) {
      newErrors.about = "Please tell us a little more about your work.";
    } else if (about.length > 2000) {
      newErrors.about =
        "Description must be less than 2,000 characters.";
    }

    // Portfolio
    if (portfolio) {
      try {
        const url = new URL(portfolio);

        if (!["http:", "https:"].includes(url.protocol)) {
          newErrors.portfolio =
            "Please enter a valid HTTP or HTTPS URL.";
        }
      } catch {
        newErrors.portfolio = "Please enter a valid portfolio URL.";
      }
    }

    // File
    if (!form.file) {
      newErrors.file = "Please upload your work.";
    } else {
      const file = form.file;
      const extension = file.name.split(".").pop()?.toLowerCase();

      if (!extension || !ALLOWED_EXTENSIONS.includes(extension)) {
        newErrors.file =
          "Unsupported file type. Please upload WAV, MP3, MP4, MOV, PDF or DOCX.";
      }

      if (file.type && !ALLOWED_MIME_TYPES.includes(file.type)) {
        newErrors.file = "This file type is not supported.";
      }

      if (file.size === 0) {
        newErrors.file = "The selected file is empty.";
      }

      if (file.size > MAX_FILE_SIZE) {
        newErrors.file = "File size must be less than 500 MB.";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData();

      formData.append("name", form.name.trim());
      formData.append("email", form.email.trim());
      formData.append("phone", form.phone.trim());
      formData.append("city", form.city.trim());
      formData.append("category", form.category);
      formData.append("title", form.title.trim());
      formData.append("about", form.about.trim());
      formData.append("portfolio", form.portfolio.trim());
      formData.append("file", form.file);

      const response = await fetch(API_URL, {
        method: "POST",
        body: formData,
      });

      const contentType = response.headers.get("content-type");

      let data = {};

      if (contentType?.includes("application/json")) {
        data = await response.json();
      }

      if (!response.ok) {
        throw new Error(
          data.message || "Unable to submit your work."
        );
      }

      setMessage("Your work has been submitted successfully.");

      setForm(INITIAL_FORM);
      setErrors({});

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (err) {
      console.error("Submission error:", err);

      setError(
        err.message ||
          "Unable to submit your work. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (field) =>
    `w-full bg-transparent border rounded-xl px-4 py-4 outline-none transition ${
      errors[field]
        ? "border-red-500/60 focus:border-red-500"
        : "border-white/15 focus:border-white"
    }`;

  return (
    <section className="bg-[#050505] text-white px-6 py-24">
      <div className="max-w-4xl mx-auto">

        <p className="text-sm tracking-[0.3em] uppercase text-white/40">
          Open Submissions
        </p>

        <h2 className="font-clash text-5xl mt-4">
          Submit Your Work
        </h2>

        <p className="text-white/60 mt-4 mb-12">
          Music, films, documentaries, scripts and visual stories.
          We review every original submission.
        </p>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="space-y-6"
        >
          {/* NAME + EMAIL */}
          <div className="grid md:grid-cols-2 gap-5">

            <div>
              <input
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className={inputClass("name")}
                maxLength={100}
                required
              />

              {errors.name && (
                <p className="text-red-400 text-xs mt-2">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className={inputClass("email")}
                maxLength={255}
                required
              />

              {errors.email && (
                <p className="text-red-400 text-xs mt-2">
                  {errors.email}
                </p>
              )}
            </div>

          </div>

          {/* PHONE + CITY */}
          <div className="grid md:grid-cols-2 gap-5">

            <div>
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className={inputClass("phone")}
                maxLength={30}
                required
              />

              {errors.phone && (
                <p className="text-red-400 text-xs mt-2">
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <input
                name="city"
                placeholder="City / State"
                value={form.city}
                onChange={handleChange}
                className={inputClass("city")}
                maxLength={100}
              />

              {errors.city && (
                <p className="text-red-400 text-xs mt-2">
                  {errors.city}
                </p>
              )}
            </div>

          </div>

          {/* CATEGORY */}
          <div>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className={inputClass("category")}
              required
            >
              <option value="Music">Music</option>
              <option value="Film">Film</option>
              <option value="Documentary">Documentary</option>
              <option value="Script">Script</option>
              <option value="Visual Art">Visual Art</option>
            </select>

            {errors.category && (
              <p className="text-red-400 text-xs mt-2">
                {errors.category}
              </p>
            )}
          </div>

          {/* PROJECT TITLE */}
          <div>
            <input
              name="title"
              placeholder="Project Title"
              value={form.title}
              onChange={handleChange}
              className={inputClass("title")}
              maxLength={200}
            />

            {errors.title && (
              <p className="text-red-400 text-xs mt-2">
                {errors.title}
              </p>
            )}
          </div>

          {/* ABOUT */}
          <div>
            <textarea
              name="about"
              rows="6"
              placeholder="Tell us about your work..."
              value={form.about}
              onChange={handleChange}
              className={`${inputClass("about")} resize-none`}
              maxLength={2000}
            />

            <div className="flex justify-between mt-2">

              {errors.about ? (
                <p className="text-red-400 text-xs">
                  {errors.about}
                </p>
              ) : (
                <span />
              )}

              <span className="text-xs text-white/30">
                {form.about.length}/2000
              </span>

            </div>
          </div>

          {/* PORTFOLIO */}
          <div>
            <input
              name="portfolio"
              type="url"
              placeholder="Portfolio / Google Drive / Vimeo Link"
              value={form.portfolio}
              onChange={handleChange}
              className={inputClass("portfolio")}
              maxLength={500}
            />

            {errors.portfolio && (
              <p className="text-red-400 text-xs mt-2">
                {errors.portfolio}
              </p>
            )}
          </div>

          {/* FILE UPLOAD */}
          <div>

            <label
              className={`border-2 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer transition ${
                errors.file
                  ? "border-red-500/60"
                  : "border-white/15 hover:border-white/40"
              }`}
            >

              <Upload
                size={34}
                className="mb-3 text-white/70"
              />

              <p className="font-medium">
                Upload Your Work
              </p>

              <span className="text-sm text-white/45 mt-1 text-center">
                WAV · MP3 · MP4 · MOV · PDF · DOCX
              </span>

              <span className="text-xs text-white/30 mt-2">
                Maximum file size: 500 MB
              </span>

              <input
                ref={fileInputRef}
                type="file"
                name="file"
                accept=".wav,.mp3,.m4a,.mp4,.mov,.pdf,.docx"
                onChange={handleChange}
                className="hidden"
              />

              {form.file && (
                <p className="mt-4 text-sm text-white/70 text-center break-all">
                  {form.file.name}
                </p>
              )}

            </label>

            {errors.file && (
              <p className="text-red-400 text-xs mt-2">
                {errors.file}
              </p>
            )}

          </div>

          {/* SUCCESS */}
          {message && (
            <div className="rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-400">
              {message}
            </div>
          )}

          {/* ERROR */}
          {error && (
            <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
              {error}
            </div>
          )}

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-white text-black rounded-full py-4 flex items-center justify-center gap-2 font-medium hover:gap-3 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Uploading..." : "Submit Work"}

            {!isSubmitting && (
              <ArrowUpRight size={18} />
            )}
          </button>

          <p className="text-center text-xs text-white/35">
            We usually respond within 2–3 weeks.
          </p>

        </form>
      </div>
    </section>
  );
}