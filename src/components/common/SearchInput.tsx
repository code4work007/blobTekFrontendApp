import { useEffect, useState } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { APP_CONFIG } from '@/constants';

interface SearchInputProps {
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  debounce?: number;
  className?: string;
}

export function SearchInput({
  value: externalValue = '',
  onChange,
  placeholder = 'Search…',
  debounce = APP_CONFIG.debounceDelay,
  className,
}: SearchInputProps) {
  const [internalValue, setInternalValue] = useState(externalValue);

  // Sync external value into local state
  useEffect(() => {
    setInternalValue(externalValue);
  }, [externalValue]);

  // Debounce: fire onChange after user stops typing
  useEffect(() => {
    const timer = setTimeout(() => {
      onChange(internalValue);
    }, debounce);
    return () => clearTimeout(timer);
  }, [internalValue, debounce, onChange]);

  return (
    <div className={cn('relative', className)}>
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
      <Input
        value={internalValue}
        onChange={(e) => setInternalValue(e.target.value)}
        placeholder={placeholder}
        className="pl-9 pr-8"
      />
      {internalValue && (
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="absolute right-1 top-1/2 h-7 w-7 -translate-y-1/2"
          onClick={() => setInternalValue('')}
          aria-label="Clear search"
        >
          <X className="h-3.5 w-3.5" />
        </Button>
      )}
    </div>
  );
}
