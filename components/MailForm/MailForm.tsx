import { Form, FormControl, FormLabel, FormItem, FormField, FormDescription, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

export default function MailForm() {
  return (
    <Form>
      <form onSubmit={()=>{}}>
        <FormField
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input/>
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage/>
            </FormItem>
          )}
        >
        </FormField>
      </form>
    </Form>
  );
}
