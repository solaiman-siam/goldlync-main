import { Button } from "@/components/shadcn/ui/button";
import NotifyBtn from "@/components/shared/NotifyBtn";

const NotificationSettings = () => {
  return (
    <>
      <div className="mb-6">
        <p className="text-3xl font-semibold">Notification Settings</p>
      </div>
      <p>
        Easily customize your notification preferences anytime. For more
        details, see our privacy policy.
      </p>

      <div className="card">
        <p className="mb-3 mt-6 text-lg font-medium">Job Updates</p>
        <div className="flex items-center justify-between gap-40 rounded-sm border p-4">
          <div className="space-y-3 text-[#2D2F34] opacity-70">
            <p>
              Get alerts for new job assignments and relevant opportunities as
              soon as they’re posted.
            </p>
            <p>Email</p>
          </div>
          <NotifyBtn />
        </div>
      </div>
      <div className="card">
        <p className="mb-3 mt-6 text-lg font-medium">
          Daily Assignment Summary
        </p>
        <div className="flex items-center justify-between gap-40 rounded-sm border p-4">
          <div className="space-y-3 text-[#2D2F34] opacity-70">
            <p>
              Receive a daily overview of new and relevant assignments from the
              last 24 hours.
            </p>
            <p>Email</p>
          </div>
          <NotifyBtn />
        </div>
      </div>
      <div className="card">
        <p className="mb-3 mt-6 text-lg font-medium">Direct Invitations</p>
        <div className="flex items-center justify-between gap-40 rounded-sm border p-4">
          <div className="space-y-3 text-[#2D2F34] opacity-70">
            <p>
              Be notified when a customer invites you to respond to an
              assignment.
            </p>
            <p>Email</p>
          </div>
          <NotifyBtn />
        </div>
      </div>
      <div className="card">
        <p className="mb-3 mt-6 text-lg font-medium">Messages & Order Status</p>
        <div className="flex items-center justify-between gap-40 rounded-sm border p-4">
          <div className="space-y-3 text-[#2D2F34] opacity-70">
            <p>
              Stay updated with notifications for new messages, contacts,
              received assignments, completed assignments, and reviews.
            </p>
            <p>Email</p>
          </div>
          <NotifyBtn />
        </div>
      </div>
      <div className="card">
        <p className="mb-3 mt-6 text-lg font-medium">Cancelled Orders</p>
        <div className="flex items-center justify-between gap-40 rounded-sm border p-4">
          <div className="space-y-3 text-[#2D2F34] opacity-70">
            <p>
              Get notified when assignments are cancelled or if you weren’t
              hired.
            </p>
            <p>Email</p>
          </div>
          <NotifyBtn />
        </div>
      </div>
      <div className="card">
        <p className="mb-3 mt-6 text-lg font-medium">
          Job Status Update Request
        </p>
        <div className="flex items-center justify-between gap-40 rounded-sm border p-4">
          <div className="space-y-3 text-[#2D2F34] opacity-70">
            <p>Let us know if you secured the job.</p>
            <p>Email</p>
          </div>
          <NotifyBtn />
        </div>
      </div>
      <div className="card">
        <p className="mb-3 mt-6 text-lg font-medium">Marketing Information</p>
        <div className="flex items-center justify-between gap-40 rounded-sm border p-4">
          <div className="space-y-3 text-[#2D2F34] opacity-70">
            <p>
              Stay informed about special offers, promotions, surveys, feedback
              requests, and updates on our platform and services.
            </p>
            <p>Email</p>
          </div>
          <NotifyBtn />
        </div>
      </div>
      <div className="card">
        <p className="mb-3 mt-6 text-lg font-medium">
          User Research Participation
        </p>
        <div className="flex items-center justify-between gap-40 rounded-sm border p-4">
          <div className="space-y-3 text-[#2D2F34] opacity-70">
            <p>Participate in paid or unpaid research to help us improve.</p>
            <p>Email</p>
          </div>
          <NotifyBtn />
        </div>
      </div>
    </>
  );
};

export default NotificationSettings;
